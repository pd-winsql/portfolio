# CV validation

## Latest template revision

- PASS: supplied Word template rendered and inspected before editing; final DOCX uses a package patch with only document.xml changed. Every other ZIP member is byte-identical, and the original file hash is unchanged.
- PASS: one Letter page with the reference's Garamond fonts, margins, aligned dates, ruled headings, and bullets. Final Word-exported PDF rendered and visually inspected.
- PASS: Objectives is first after the name/contact; Activities absent; Education contains only the BS Information Systems degree at Cagayan State University - Carig Campus.
- PASS: uploaded image supplies the objective, fuller name/address, clinic system experience, DILG work immersion, workshop title/date/location, and skills. Strong programming proficiency claims are omitted in line with the owner's earlier clarification. Existing confirmed sales-analysis project and DataCamp certification retained.
- PASS: original download paths are reused so the website link serves the revised CV after deployment. No new controls or UI changes in this revision.

The earlier validation below describes the first CV version; the latest revision is authoritative for page geometry and content.

- PASS: PDF and Word CVs are each one A4 page. Both final page renders inspected with no clipped text or overflow.
- PASS: PDF has selectable text in a single reading column with standard section headings; name, contact information, skills, school, projects, academic experience, and certification extracted successfully.
- PASS: no tables, text boxes, photographs, skill ratings, or decorative icons in the CV. General career objective uses the owner's requested focus.
- PASS: capstone development is academic experience; no employment history, dates, results, or programming proficiency invented.
- PASS: Word rendered using installed Microsoft Word after the packaged renderer reported missing LibreOffice. PDF rendered with Poppler.
- PASS: website lint and production build completed; final PDF is included in dist/documents and its extracted text contains the confirmed contact and education details.
- PASS: CV link downloads a valid PDF named Winjemelron-Corpuz-CV.pdf; keyboard focus is visible; no horizontal overflow at 320, 375, 768, and 1440px.

Formatting is designed for ATS readability; no external ATS scoring service was used.
