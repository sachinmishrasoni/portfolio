// TipTapEditor.tsx
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';
import { alpha, Box, Paper, Typography } from '@mui/material';
import EditorToolbar from './EditorToolbar';
import './index.css';

interface TipTapEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  maxCharacters?: number;
}

const TipTapEditor: React.FC<TipTapEditorProps> = ({
  content = '<p>Start typing here...</p>',
  onChange,
  maxCharacters,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: maxCharacters,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editable: true,
  });

  // State to hold character and word counts
  const [count, setCount] = React.useState({
    characters: 0,
    words: 0,
  });

  // Effect to update counts when editor content changes
  React.useEffect(() => {
    if (!editor) return;
    
    const updateCount = () => {
      const chars = editor.storage.characterCount.characters();
      const words = editor.storage.characterCount.words();
      console.log('Update:', { chars, words }); // Debug log
      setCount({ characters: chars, words });
    };
    
    editor.on('update', updateCount);
    updateCount(); // Initial count
    
    return () => {
      editor.off('update', updateCount); // Cleanup
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <Paper
      sx={{
        backgroundColor: theme => alpha(theme.palette.background.paper, 0.5),
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: theme => alpha(theme.palette.primary.main, 0.5),
        borderRadius: 3,
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }}
    >
      <Box sx={{ p: 1 }}>
        <EditorToolbar editor={editor} />

        <Box
          sx={{
            mt: 1,
            '.ProseMirror': {
              minHeight: { xs: '450px', md: '385px' },
              maxHeight: { xs: '450px', md: '385px' },
              overflowY: 'auto',
              py: 1,
              px: 2,
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              '&:focus': {
                outline: 'none',
                borderColor: 'primary.main',
              },
            },
          }}
        >
          <EditorContent editor={editor} />

          <Typography 
            variant="subtitle2" 
            color="text.secondary" 
            sx={{ mt: 1 }}
          >
            {count.characters} characters ({count.words} words)
            {maxCharacters && ` / ${maxCharacters}`}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default TipTapEditor;
