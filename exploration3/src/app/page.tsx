"use client"

import { Box, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react';

export default function Home() {
  const [word, setWord] = useState<string>("")
  const [savedWord, setSavedWord] = useState<string>("")
  const [response, setResponse] = useState<string | undefined>(undefined)

  useEffect(()=>{
    fetch("/api/word?word=holaMundo")
      .then((res)=>{return res.json()})
      .then((data)=>{setResponse(data.message)})
  }, [])

  useEffect(()=>{console.log(savedWord)}, [savedWord])

  return (

      <Box>
        <Typography variant="h3">{response ?? ""}</Typography>
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
