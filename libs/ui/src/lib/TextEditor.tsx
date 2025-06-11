import JoditEditor from "jodit-react";
import { Button } from "primereact/button";
import { useEffect, useMemo, useState } from "react";

type TextEditorButtonType =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "eraser"
  | "ul"
  | "ol"
  | "font"
  | "fontsize"
  | "brush"
  | "paragraph"
  | "lineHeight"
  | "superscript"
  | "subscript"
  | "image"
  | "hr"
  | "table"
  | "link"
  | "indent"
  | "outdent"
  | "align"
  | "symbols";

type TextEditorProps = {
  onValueChange: (value: string) => void;
  value: string | undefined;
  onEdit?: (isEditing: boolean) => void;
  includedButtons?: TextEditorButtonType[] | undefined;
};

const TextEditor = ({
  onValueChange,
  value,
  onEdit,
  includedButtons = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "eraser",
    "ul",
    "ol",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "lineHeight",
    "superscript",
    "subscript",
    "image",
    "hr",
    "table",
    "link",
    "align"
  ]
}: TextEditorProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [isEditorDisplayed, setIsEditorDisplayed] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value || "");

  const editorConfig = useMemo(
    () => ({
      toolbarAdaptive: false,
      readonly: false,
      buttons: includedButtons,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      addNewLine: false,
      enter: "br"
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    onEdit && onEdit(isEditorDisplayed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditorDisplayed]);

  return (
    <div className="w-full">
      {!isEditorDisplayed && (
        <div
          dangerouslySetInnerHTML={{ __html: value || "Start writting..." }}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          className={`p-inputtext w-full ${isMouseOver ? `bg-gray-100` : `bg-inherit`} ${
            !value ? `text-label` : ``
          }`}
          onClick={() => setIsEditorDisplayed(true)}
        />
      )}
      {isEditorDisplayed && (
        <div className="flex flex-col gap-1">
          <JoditEditor
            value={value || ""}
            config={editorConfig as any}
            onBlur={(e: any) => {
              setInputValue(e);
            }}
            className="mdt-jodit-editor"
          />
          <div className="flex justify-end gap-1">
            <Button
              label="Discard"
              severity="danger"
              text
              onClick={() => {
                onValueChange(value || "");
                setIsMouseOver(false);
                setIsEditorDisplayed(false);
              }}
            />
            <Button
              label="Apply"
              severity="success"
              onClick={() => {
                onValueChange(inputValue);
                setIsMouseOver(false);
                setIsEditorDisplayed(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default TextEditor;
