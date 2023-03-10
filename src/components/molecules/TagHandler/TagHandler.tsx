import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, Chip, TextField } from "@mui/material";
import { useEffect } from "react";
import TextFieldTDL from "../../atoms/TextFieldTDL";


interface Tag {
    id?: string;
    title: string;
}

interface TagHandlerProps {
    tags: Tag[];
    placeholder: string;
    fieldLabel: string;

}

// TODO:REMOVE Sample test case .
export function sum(a: number, b: number) {
    return a + b;
}

export function TagHandler({ tags, placeholder, fieldLabel }: TagHandlerProps) {

    useEffect(() => {

    }, []);

    // Handle The change
    const handleAutoCompleteChange = (value: string[], reason: AutocompleteChangeReason, detail: AutocompleteChangeDetails<string> | undefined) => {
        console.log(value, reason, detail);
        
    }

    return (
        <Autocomplete
            multiple
            options={tags.map((option) => option?.title)}
            defaultValue={[]}
            freeSolo
            onChange={(event, value, reason, details) => (handleAutoCompleteChange(value, reason, details))}
            renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextFieldTDL
                    {...params}
                    label={fieldLabel}
                    placeholder={placeholder}
                />
            )}
        />
    )
}