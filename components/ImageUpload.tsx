// import Image from "next/image";
import { useCallback, useState } from "react";

interface DropzoneProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<DropzoneProps> = ({ onChange, label, value, disabled }) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback((base64: string) => {
    onChange(base64)
  }, [onChange])

  const handleDrop = useCallback((files: any) => {
    const file = files[0]
    const render = new FileReader();

    render.onload = (event: any) => {
      setBase64(event?.target.result)
      handleChange(event?.target.result)
    }
  }, [handleChange])

  return (
    <></>
  )
}

export default ImageUpload;