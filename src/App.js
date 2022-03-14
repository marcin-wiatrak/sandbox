import styled from 'styled-components';
import {useReducer, useState} from 'react';
import Field from './Field';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const formInitial = {
    values: {
        firstName: 'Marcin',
        lastName: '',
        email: '',
        age: '',
        married: '',
        phone: '',
    },
    errors: [],
}

const formReducer = (state, action) => {
    const errorsList = [...state.errors].filter(el => el !== action.field);
    if (action.field === 'lastName' && action.value === 'Putin') errorsList.push(action.field);
    return {
        ...state,
        values: {
            ...state.values,
            [action.field]: action.value
        },
        errors: errorsList,
    };
}

function App() {
    const [form, dispatch] = useReducer(formReducer, formInitial);

    console.log(form);

  return (
      <Wrapper>
          <Field label="First name" name='firstName' fn={dispatch} form={form} />
          <Field label="Last name" name='lastName' fn={dispatch} form={form} />
          <Field label="Email" name='email' fn={dispatch} form={form} />
          <Field label="Age" name='age' fn={dispatch} form={form} />
          <Field label="Married" name='married' fn={dispatch} form={form} />
      </Wrapper>
  );
}

export default App;
