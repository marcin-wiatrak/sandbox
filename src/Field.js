import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  &.error {
    position: relative;
    border: 2px solid red;
    border-radius: 3px;
    color: red;
    text-decoration: line-through;
  }
  outline: none;
`

function Field({ type, label, fn, name, form }) {
    return (
        <Input
            type={type}
            placeholder={label}
            onChange={e => fn({
                field: name,
                value: e.target.value
            })}
            value={form.values[name]}
            className={form.errors.includes(name) && 'error'}
        />
    );
}

Field.defaultProps = {
    type: 'text',
}

Field.propTypes = {
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default Field;