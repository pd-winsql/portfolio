"""Fill the retained resume template without rewriting its styles or package parts.

Run with the bundled Python runtime. Export the resulting DOCX to PDF with Word.
"""
from copy import deepcopy
from hashlib import sha256
from pathlib import Path
from zipfile import ZipFile
import json

from lxml import etree as ET

ROOT = Path(__file__).resolve().parents[1]
REFERENCE = Path(r'C:\Users\ronjc\Downloads\developer-resume-template.docx')
EXPECTED_HASH = '6cd8affa962a52f8d85ea2e5fd9c44507dbd3a89d7cc3c9df9366495042f4ad5'
OUT = ROOT / 'public/documents/winjemelron-corpuz-cv.docx'
QA = ROOT / 'output/cv-review'
W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
XML = '{http://www.w3.org/XML/1998/namespace}'

assert sha256(REFERENCE.read_bytes()).hexdigest() == EXPECTED_HASH, 'Reference changed; inspect it before rebuilding'
with ZipFile(REFERENCE) as source:
    members = {item.filename: source.read(item.filename) for item in source.infolist()}
    infos = source.infolist()
root = ET.fromstring(members['word/document.xml'])
body = root.find(W + 'body')
patterns = body.findall(W + 'p')
section = deepcopy(body.find(W + 'sectPr'))

def paragraph(index, parts):
    """Clone the source paragraph and its relevant run properties."""
    original = patterns[index]
    result = deepcopy(original)
    for attr in list(result.attrib):
        if attr.endswith('paraId') or attr.endswith('textId'):
            del result.attrib[attr]
    source_runs = original.findall(W + 'r')
    for child in list(result):
        if child.tag != W + 'pPr':
            result.remove(child)
    if isinstance(parts, str):
        parts = [parts]
    for i, value in enumerate(parts):
        run = ET.SubElement(result, W + 'r')
        props = source_runs[min(i, len(source_runs) - 1)].find(W + 'rPr') if source_runs else None
        if props is not None:
            run.append(deepcopy(props))
        for j, line in enumerate(value.split('\n')):
            if j:
                ET.SubElement(run, W + 'br')
            for k, segment in enumerate(line.split('\t')):
                if k:
                    ET.SubElement(run, W + 'tab')
                t = ET.SubElement(run, W + 't')
                t.set(XML + 'space', 'preserve')
                t.text = segment
    return result

content = []
def add(index, parts):
    content.append(paragraph(index, parts))
def heading(text):
    add(11, '')
    add(3, [text, '\t'])

add(0, 'WINJEMELRON J. CORPUZ')
add(1, 'Baybayog, Alcala, Cagayan | 09567324529 | ronjcorpuz11@gmail.com\nlinkedin.com/in/winsight | github.com/pd-winsql')
heading('OBJECTIVES')
add(7, 'A motivated and adaptable Bachelor of Science in Information Systems student seeking an opportunity to gain practical experience in the field of information technology. Eager to apply my knowledge in software development, database management, and data analysis while continuously improving my technical, analytical, and problem-solving skills. I aim to contribute to meaningful projects, collaborate effectively with a team, and further develop my professional skills in a real-world work environment.')

heading('EDUCATION')
add(6, 'CAGAYAN STATE UNIVERSITY - CARIG CAMPUS')
add(7, ['Bachelor of Science in Information Systems', '\t2023 - Present'])
add(7, 'Expected graduation: 2027')

heading('EXPERIENCE')
add(18, 'SYSTEM DEVELOPMENT')
add(19, 'Capstone Project')
add(20, 'Developed an Online Appointment with Records Management System for Dr. Aprille Ventura Clinica Dental.')
add(21, 'Used AI assistance during system development.')
add(23, '')
add(24, ['DILG OFFICE', '\tAlcala, Cagayan'])
add(25, 'Work Immersion Trainee\t2023')

heading('PROJECTS')
add(32, 'SALES PERFORMANCE AND COHORT ANALYSIS')
add(33, 'Explored retail sales and customer cohorts using PostgreSQL and Power BI.')
add(34, 'Examined regional sales, monthly performance, and customer purchase patterns using SQL queries.')
add(7, 'github.com/pd-winsql/sales-perf-and-cohort-analysis')

heading('SEMINARS AND TRAINING')
add(32, 'Workshop on Productivity Tools, Computer Troubleshooting, and Communication Enhancement')
add(7, ['Cagayan State University - Carig Campus', '\tNovember 25-27, 2025'])

heading('SKILLS AND CERTIFICATION')
add(20, 'SQL database management, querying, and data analysis using PostgreSQL.')
add(20, 'Data visualization and dashboard creation using Power BI.')
add(20, 'Data organization and analysis using Microsoft Excel.')
add(20, 'Knowledge of database design, normalization, and system development.')
add(56, ['Certification: ', 'Associate Data Analyst - DataCamp'])

for child in list(body):
    body.remove(child)
for element in content:
    body.append(element)
body.append(section)
final_xml = ET.tostring(root, xml_declaration=True, encoding='UTF-8', standalone=True)
OUT.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(OUT, 'w') as target:
    for info in infos:
        target.writestr(info, final_xml if info.filename == 'word/document.xml' else members[info.filename])

inventory = []
with ZipFile(OUT) as final:
    assert set(final.namelist()) == set(members)
    for name, data in members.items():
        actual = final.read(name)
        if name != 'word/document.xml':
            assert actual == data, f'Unexpected change in {name}'
        inventory.append({'path': name, 'source_size': len(data), 'source_sha256': sha256(data).hexdigest(), 'final_sha256': sha256(actual).hexdigest(), 'role': 'editable' if name == 'word/document.xml' else 'preserve-only'})
QA.mkdir(parents=True, exist_ok=True)
(QA / 'template-package-inventory.json').write_text(json.dumps(inventory, indent=2), encoding='utf-8')
text = ''.join(root.itertext())
for excluded in ['JUAN DELA CRUZ', 'ACTIVITIES', 'ELEMENTARY', 'HIGH SCHOOL', 'TECHSTART', 'GDSC', 'AWS Certified']:
    assert excluded not in text
assert sha256(REFERENCE.read_bytes()).hexdigest() == EXPECTED_HASH
print(f'Created {OUT}; all package parts except document.xml preserved byte-for-byte')
