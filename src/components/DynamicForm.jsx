import React, { useState } from 'react';

function DynamicForm() {
  const [inputFields, setInputFields] = useState([{ value: '' }]);

  return (
    <form>
      {inputFields.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input.value}
            onChange={e => {
              const newInputFields = [...inputFields];
              newInputFields[index].value = e.target.value;
              setInputFields(newInputFields);
            }}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setInputFields([...inputFields, { value: '' }]);
        }}
      >
        Add Input
      </button>
    </form>
  );
}

export default DynamicForm;
