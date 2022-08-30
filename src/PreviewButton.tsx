import React, { useState } from "react";
import "./PreviewButton.css";

interface IPreviewButtonProps {
  description: string;
}

export const PreviewButton: React.FC<IPreviewButtonProps> = ({
  description,
}) => {
  const [previewButtonOpen, setPreviewButtonOpen] = useState<boolean>(false);
  const togglePreviewButton = () => {
    setPreviewButtonOpen(!previewButtonOpen);
  };
  return (
    <div>
      <button className="shopping-button" onClick={() => togglePreviewButton()}>
        preview
      </button>

      {previewButtonOpen && ( // its uqual with if this is true do that
        <div className="Preview-button-container">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
