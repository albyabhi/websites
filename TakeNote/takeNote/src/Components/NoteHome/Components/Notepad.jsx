import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, Modifier, convertToRaw } from 'draft-js';
import { Paper, IconButton, Button, ButtonGroup } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined, FormatListBulleted, FormatListNumbered } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Notepad = () => {
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleEditorChange = (newState) => {
    setEditorState(newState);
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const blockStyleFn = (block) => {
    const content = editorState.getCurrentContent();
    const firstBlock = content.getBlockMap().first();
    if (block.getKey() === firstBlock.getKey()) {
      return 'first-block';
    }
    return null;
  };

  const saveNote = async () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);

    const title = rawContent.blocks[0]?.text.trim() || 'Untitled';

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await axios.post(
        '/note/save-note',
        { title, content: rawContent },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('Note saved:', response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        console.error('Session expired. Please log in again.');
        navigate('/login');
      } else {
        console.error('Error saving note:', error);
      }
    }
  };

  return (
    <div>
      <Paper style={{ padding: '20px', marginTop: '20px', minHeight: '400px' }}>
        <Paper style={{ padding: '10px', minHeight: '300px', boxShadow: 'none' }}>
          <Editor
            editorState={editorState}
            onChange={handleEditorChange}
            blockStyleFn={blockStyleFn}
          />
        </Paper>

        <ButtonGroup variant="outlined" style={{ marginBottom: '15px' }}>
          <IconButton onClick={() => toggleInlineStyle('BOLD')}><FormatBold /></IconButton>
          <IconButton onClick={() => toggleInlineStyle('ITALIC')}><FormatItalic /></IconButton>
          <IconButton onClick={() => toggleInlineStyle('UNDERLINE')}><FormatUnderlined /></IconButton>
          <IconButton onClick={() => toggleBlockType('unordered-list-item')}><FormatListBulleted /></IconButton>
          <IconButton onClick={() => toggleBlockType('ordered-list-item')}><FormatListNumbered /></IconButton>
        </ButtonGroup>

        <Button variant="contained" color="primary" onClick={saveNote}>
          Save Note
        </Button>
      </Paper>

      <style jsx>{`
        .first-block {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Notepad;
