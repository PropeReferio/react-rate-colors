// import React, { useRef } from 'react';

// export default function AddColorForm({ onNewColor = f => f}) {
//     const txtTitle = useRef();
//     const hexColor = useRef();

//     const submit = e => { 
//         e.preventDefault();
//         const title = txtTitle.current.value;
//         const color = hexColor.current.value;
//         onNewColor(title, color);
//         txtTitle.current.value = "";
//         hexColor.current.value = "";
//      };

//     return (
//         <form onSubmit={submit}>
//             <input ref={txtTitle} type="text" placeholder="color title..." required />
//             <input ref={hexColor} type="color" required />
//             <button>ADD</button>
//         </form>
//     );
// }  // This is an uncontrolled component that uses refs and imperative programming.

// import React, { useState } from 'react';

// export default function AddColorForm({ onNewColor = f => f }) {
//     const [title, setTitle] = useState("");
//     const [color, setColor] = useState('#000000');

//     const submit = e => { 
//         e.preventDefault();
//         onNewColor(title, color);
//         setTitle("");
//         setColor("");
//      };

//     return ( 
//         <form onSubmit={submit}>
//             <input
//                 value={title}
//                 onChange={event => setTitle(event.target.value)}
//                 type='text'
//                 placeholder='color title...'
//                 required
//             />
//             <input
//                 value={color}
//                 onChange={event => setColor(event.target.value)}
//                 type='color'
//                 required
//             />
//             <button>ADD</button>
//         </form>
//      );
// }  // This is a controlled component that uses state instead of refs.

import React from "react";
import { useInput } from "../hooks/useInput";

export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = event => { 
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
};

  return ( 
    <form onSubmit={submit}>
    <input
      {...titleProps}
      type="text"
      placeholder="color title..."
      required
    />
    <input {...colorProps} type="color" required />
    <button>ADD</button>
    </form>
   );
} // This approach uses a custom hook.