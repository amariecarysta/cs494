"use client"

import { Box, TextField } from '@mui/material'
import { useState, useEffect } from 'react';

export default function Home() {
  const [word, setWord] = useState<string>("")
  const [savedWord, setSavedWord] = useState<string>("")

  useEffect(()=>{console.log(savedWord)}, [savedWord])
  

  return (

      <Box>
        <TextField
          id="word-text"
          label="Word"
          value={word}
          onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{ setWord(event.target.value)}}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && setSavedWord(word)}
          />
          
      </Box>
  );
}
