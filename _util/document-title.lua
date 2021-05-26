gtitle = ''
gdate = ''

function Meta(m)
    -- obtain the document title and date
    gtitle = pandoc.utils.stringify(m.title)
    gdate = pandoc.utils.stringify(m.date)

    return m
end

function Pandoc(doc)
    -- title properties do not appear in the document outline or table of contents so
    -- insert a heading 1 using the document's title property
    table.insert(doc.blocks, 1, pandoc.Header(1, gtitle))

    -- insert date
    table.insert(doc.blocks, 2, pandoc.Para('Updated: ' .. gdate))

    -- insert a page break at the end of the document
    table.insert(doc.blocks, pandoc.RawBlock('openxml', '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'))

    -- strip out doc.meta so the title page does not appear
    return pandoc.Pandoc(doc.blocks)
end
