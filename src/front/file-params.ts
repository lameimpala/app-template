export const maxFileSizeInBytes = 20480000

const allowedDocumentTypes = [
    { contentType: 'application/pdf', extension: 'pdf' },
    { contentType: 'image/png', extension: 'png' },
    { contentType: 'image/jpeg', extension: 'jpg' },
    { contentType: 'image/jpeg', extension: 'jpeg' },
    { contentType: 'image/gif', extension: 'gif' },
    { contentType: 'image/tiff', extension: 'tif' },
    { contentType: 'image/tiff', extension: 'tiff' },
    { contentType: 'application/msword', extension: 'doc' },
    { contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', extension: 'docx' }
]
export const allowedExtensions = allowedDocumentTypes.map(({ extension }) => extension.toUpperCase())
export const allowedContentTypes = allowedDocumentTypes.map(({ contentType }) => contentType)
