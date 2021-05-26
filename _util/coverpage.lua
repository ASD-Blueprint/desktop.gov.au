function Pandoc(doc)
    -- insert a page break at the end of the document
    table.insert(doc.blocks, pandoc.RawBlock('openxml', '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'))

    return pandoc.Pandoc(doc.blocks, doc.meta)
end
