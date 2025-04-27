// EditorToolbar.tsx
import React from 'react';
import { Editor } from '@tiptap/react';
import { Toolbar, Divider, Stack } from '@mui/material';
// import ToolButton from './ToolButton';
import {
    FaBold,
    FaItalic,
    FaListUl,
    FaListOl,
    FaUnderline,
    FaStrikethrough,
    FaQuoteLeft,
    FaUndo,
    FaRedo,
    FaHeading,
} from 'react-icons/fa';
import ToolButton from './ToolButton';
import CustomButton from '../../ui/CustomButton';

interface EditorToolbarProps {
    editor: Editor | null;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <Toolbar variant="dense" sx={{
            px: '0 !important',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
        }}>
            <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} >
                <Stack direction={'row'} gap={1}>
                    <ToolButton
                        title="Undo"
                        icon={FaUndo}
                        editor={editor}
                        command={() => editor.chain().focus().undo().run()}
                        canExecute={() => editor.can().undo()}
                    />
                    <ToolButton
                        title="Redo"
                        icon={FaRedo}
                        editor={editor}
                        command={() => editor.chain().focus().redo().run()}
                        canExecute={() => editor.can().redo()}
                    />
                </Stack>
                <CustomButton variant='contained' shape='semi-round' size='small'
                sx={{
                    boxShadow: 'none'
                }}
                >
                    Preview
                </CustomButton>
            </Stack>

            <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} gap={1}>
                <ToolButton
                    title="Bold"
                    icon={FaBold}
                    editor={editor}
                    command={() => editor.chain().focus().toggleBold().run()}
                    isActive={() => editor.isActive('bold')}
                    canExecute={() => editor.can().chain().focus().toggleBold().run()}
                />
                <ToolButton
                    title="Italic"
                    icon={FaItalic}
                    editor={editor}
                    command={() => editor.chain().focus().toggleItalic().run()}
                    isActive={() => editor.isActive('italic')}
                    canExecute={() => editor.can().chain().focus().toggleItalic().run()}
                />
                <ToolButton
                    title="Underline"
                    icon={FaUnderline}
                    editor={editor}
                    // command={() => editor.chain().focus().toggleUnderline().run()}
                    isActive={() => editor.isActive('underline')}
                // canExecute={() => editor.can().chain().focus().toggleUnderline().run()}
                />
                <ToolButton
                    title="Strikethrough"
                    icon={FaStrikethrough}
                    editor={editor}
                    command={() => editor.chain().focus().toggleStrike().run()}
                    isActive={() => editor.isActive('strike')}
                    canExecute={() => editor.can().chain().focus().toggleStrike().run()}
                />

                <Divider orientation="vertical" flexItem />

                <ToolButton
                    title="Bullet List"
                    icon={FaListUl}
                    editor={editor}
                    command={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={() => editor.isActive('bulletList')}
                    canExecute={() => editor.can().chain().focus().toggleBulletList().run()}
                />
                <ToolButton
                    title="Ordered List"
                    icon={FaListOl}
                    editor={editor}
                    command={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={() => editor.isActive('orderedList')}
                    canExecute={() => editor.can().chain().focus().toggleOrderedList().run()}
                />
                <ToolButton
                    title="Blockquote"
                    icon={FaQuoteLeft}
                    editor={editor}
                    command={() => editor.chain().focus().toggleBlockquote().run()}
                    isActive={() => editor.isActive('blockquote')}
                    canExecute={() => editor.can().chain().focus().toggleBlockquote().run()}
                />

                <ToolButton
                    title="Heading 1"
                    icon={FaHeading}
                    editor={editor}
                    command={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    isActive={() => editor.isActive('heading', { level: 1 })}
                    canExecute={() => editor.can().chain().focus().toggleHeading({ level: 1 }).run()}
                />
            </Stack>
        </Toolbar>
    );
};

export default EditorToolbar;
