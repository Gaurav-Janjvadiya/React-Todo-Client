import React from 'react'

function TodoItem({ text }) {
  return (
    <p style={{ backgroundColor: '#303030', color: '#fff', padding: '8px', borderRadius: '4px', margin: '4px 0' }}>
      {text}
    </p>
  )
}

export default TodoItem