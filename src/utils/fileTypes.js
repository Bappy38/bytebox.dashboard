const FILE_MIME_TYPES = {
    images: [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/svg+xml",
      "image/webp",
    ],
    pdfs: ["application/pdf"],
    videos: ["video/mp4", "video/webm", "video/mov", "video/avi", "video/mkv"],
    audios: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/flac"],
    documents: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "text/plain",
    ],
  };

  export const FILE_TYPES = {
    IMAGE: "image",
    PDF: "pdf",
    UNSUPPORTED: "unknown"
  };
  
  export const getFileType = (mimeType) => {
    if (FILE_MIME_TYPES.images.includes(mimeType)) return FILE_TYPES.IMAGE;
    if (FILE_MIME_TYPES.pdfs.includes(mimeType)) return FILE_TYPES.PDF;
    
    return FILE_TYPES.UNSUPPORTED;
  };