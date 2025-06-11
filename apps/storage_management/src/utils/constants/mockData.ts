import { FileTypeEnum } from "../../types/enums/FileTypeEnum";
import { IFile } from "../../types/interfaces";


export const mockFiles: IFile[] = [
  {
    id: "1a2b3c4d-0001-0000-0000-000000000001",
    displayName: "Project Plan",
    fileName: "project_plan.docx",
    filePath: "/documents/project_plan.docx",
    mimeType: FileTypeEnum.WORD,
    createdAt: "2024-05-01T10:00:00Z",
    updatedAt: "2024-05-02T12:00:00Z",
    deletedAt: "",
    size: 204800
  },
  {
    id: "1a2b3c4d-0002-0000-0000-000000000002",
    displayName: "Logo",
    fileName: "logo.png",
    filePath: "/images/logo.png",
    mimeType: FileTypeEnum.PNG,
    createdAt: "2024-05-03T09:30:00Z",
    updatedAt: "2024-05-03T09:30:00Z",
    deletedAt: "",
    size: 102400
  },
  {
    id: "1a2b3c4d-0003-0000-0000-000000000003",
    displayName: "Invoice Q1",
    fileName: "invoice_q1.pdf",
    filePath: "/invoices/invoice_q1.pdf",
    mimeType: FileTypeEnum.PDF,
    createdAt: "2024-04-15T14:20:00Z",
    updatedAt: "2024-04-16T08:15:00Z",
    deletedAt: "",
    size: 307200
  },
  {
    id: "1a2b3c4d-0004-0000-0000-000000000004",
    displayName: "Meeting Audio",
    fileName: "meeting_audio.mp3",
    filePath: "/audio/meeting_audio.mp3",
    mimeType: FileTypeEnum.MP3,
    createdAt: "2024-03-10T11:00:00Z",
    updatedAt: "2024-03-10T11:00:00Z",
    deletedAt: "",
    size: 5120000
  },
  {
    id: "1a2b3c4d-0005-0000-0000-000000000005",
    displayName: "Presentation",
    fileName: "presentation.pptx",
    filePath: "/presentations/presentation.pptx",
    mimeType: FileTypeEnum.POWERPOINT,
    createdAt: "2024-02-20T16:45:00Z",
    updatedAt: "2024-02-21T10:00:00Z",
    deletedAt: "",
    size: 1048576
  },
  {
    id: "1a2b3c4d-0006-0000-0000-000000000006",
    displayName: "Budget Sheet",
    fileName: "budget.xlsx",
    filePath: "/sheets/budget.xlsx",
    mimeType: FileTypeEnum.EXCEL,
    createdAt: "2024-01-05T08:00:00Z",
    updatedAt: "2024-01-06T09:00:00Z",
    deletedAt: "",
    size: 256000
  },
  {
    id: "1a2b3c4d-0007-0000-0000-000000000007",
    displayName: "Team Photo",
    fileName: "team_photo.jpg",
    filePath: "/photos/team_photo.jpg",
    mimeType: FileTypeEnum.IMAGE,
    createdAt: "2024-06-01T13:00:00Z",
    updatedAt: "2024-06-01T13:00:00Z",
    deletedAt: "",
    size: 350000
  },
  {
    id: "1a2b3c4d-0008-0000-0000-000000000008",
    displayName: "Script",
    fileName: "script.js",
    filePath: "/scripts/script.js",
    mimeType: FileTypeEnum.JS,
    createdAt: "2024-05-25T15:30:00Z",
    updatedAt: "2024-05-25T16:00:00Z",
    deletedAt: "",
    size: 48000
  },
  {
    id: "1a2b3c4d-0009-0000-0000-000000000009",
    displayName: "Archive",
    fileName: "archive.zip",
    filePath: "/archives/archive.zip",
    mimeType: FileTypeEnum.ZIP,
    createdAt: "2024-04-10T10:10:00Z",
    updatedAt: "2024-04-10T10:10:00Z",
    deletedAt: "",
    size: 2048000
  },
  {
    id: "1a2b3c4d-0010-0000-0000-000000000010",
    displayName: "Readme",
    fileName: "README.md",
    filePath: "/docs/README.md",
    mimeType: FileTypeEnum.MARKDOWN,
    createdAt: "2024-06-05T18:00:00Z",
    updatedAt: "2024-06-05T18:00:00Z",
    deletedAt: "",
    size: 12000
  },
  // 90 more mock files
  ...Array.from({ length: 90 }, (_, i) => {
    const idx = i + 11;
    const types = [
      FileTypeEnum.IMAGE,
      FileTypeEnum.PNG,
      FileTypeEnum.VIDEO,
      FileTypeEnum.MP3,
      FileTypeEnum.PDF,
      FileTypeEnum.TEXT,
      FileTypeEnum.ZIP,
      FileTypeEnum.CSV,
      FileTypeEnum.EXCEL,
      FileTypeEnum.WORD,
      FileTypeEnum.POWERPOINT,
      FileTypeEnum.JSON,
      FileTypeEnum.XML,
      FileTypeEnum.HTML,
      FileTypeEnum.MARKDOWN,
      FileTypeEnum.SVG,
      FileTypeEnum.JS
    ];
    const names = [
      "Document",
      "Photo",
      "Video",
      "Audio",
      "Report",
      "Note",
      "Backup",
      "Data",
      "Sheet",
      "Letter",
      "Slides",
      "Config",
      "Feed",
      "Page",
      "Guide",
      "Vector",
      "Script"
    ];
    const ext = [
      "jpg",
      "png",
      "mp4",
      "mp3",
      "pdf",
      "txt",
      "zip",
      "csv",
      "xlsx",
      "docx",
      "pptx",
      "json",
      "xml",
      "html",
      "md",
      "svg",
      "js"
    ];
    const typeIdx = i % types.length;
    return {
      id: `1a2b3c4d-${idx.toString().padStart(4, "0")}-0000-0000-0000000000${idx}`,
      displayName: `${names[typeIdx]} ${idx}`,
      fileName: `${names[typeIdx].toLowerCase()}_${idx}.${ext[typeIdx]}`,
      filePath: `/${names[typeIdx].toLowerCase()}s/${names[typeIdx].toLowerCase()}_${idx}.${
        ext[typeIdx]
      }`,
      mimeType: types[typeIdx],
      createdAt: `2024-05-${((idx % 28) + 1).toString().padStart(2, "0")}T${(8 + (idx % 12))
        .toString()
        .padStart(2, "0")}:00:00Z`,
      updatedAt: `2024-05-${((idx % 28) + 1).toString().padStart(2, "0")}T${(9 + (idx % 12))
        .toString()
        .padStart(2, "0")}:00:00Z`,
      deletedAt: "",
      size: 10000 + idx * 1000
    } as IFile;
  })
];
