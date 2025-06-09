'use client';
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #9aa5ce;
`;

export const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #414868;
  border-radius: 0.5rem;
  background-color: #24283b;
  color: #c0caf5;
  width: 100%;
  color-scheme: dark;

  &:focus {
    outline: none;
    border-color: #7aa2f7;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #414868;
  border-radius: 0.5rem;
  background-color: #24283b;
  color: #c0caf5;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  color-scheme: dark;

  &:focus {
    outline: none;
    border-color: #7aa2f7;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  margin-top: 0.25rem;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.2rem;
`;

export const Checkbox = styled.input`
  margin-right: 15px;
  cursor: pointer;
`;
