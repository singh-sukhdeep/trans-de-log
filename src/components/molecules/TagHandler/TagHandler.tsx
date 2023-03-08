import { Autocomplete, Chip, TextField } from "@mui/material";


interface Tag {
    id?: string;
    title: string;
}

interface TagHandlerProps {
    tags: Tag[];
    placeholder: string;
    fieldLabel: string;

}

export function sum(a: number, b: number) {
    return a + b;
}

export function TagHandler({ tags, placeholder, fieldLabel }: TagHandlerProps) {
    return (
        <Autocomplete
            multiple
            options={tags.map((option) => option?.title)}
            defaultValue={[]}
            freeSolo
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
                <TextField
                    {...params}
                    variant="outlined"
                    label={fieldLabel}
                    placeholder={placeholder}
                />
            )}
        />
    )
}