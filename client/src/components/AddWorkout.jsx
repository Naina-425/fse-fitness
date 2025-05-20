import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { addWorkout, getDashboardDetails } from "../api";
import { useNavigate } from "react-router-dom";


const Card = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 700px;
  margin: 0 auto;
  padding: 32px;
  border-radius: 16px;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthInput = styled.div`
  grid-column: 1 / -1;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
  display: block;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 30};
  border-radius: 8px;
  font-size: 14px;
  background: ${({ theme }) => theme.bg_secondary};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;






const AddWorkout = () => {

   const [isDisabled, setDisabled] = useState(false);
 

  const [form, setForm] = useState({
    category: "",
    workoutName: "",
    sets: "",
    reps: "",
    weight: "",
    duration: "",
  });

  const navigate = useNavigate();


  const addNewWorkout = async (form) => {
  
    const token = localStorage.getItem("fittrack-app-token");
    
    await addWorkout(token, { workoutString: form })
      .then((res) => {
      })
      .catch((err) => {
        alert(err);
      })
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =async () => {
    setDisabled(true);
    
    addNewWorkout(form);
 
    navigate(0)
    setDisabled(false);
  };

  return (
  
    <Card>
      <Title>🏋️ Add New Workout</Title>

      <InputGroup>
        <div>
          <Label>Body Part / Category</Label>
          <Select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Legs">Legs</option>
            <option value="Chest">Chest</option>
            <option value="Back">Back</option>
            <option value="Arms">Arms</option>
            <option value="Core">Core</option>
          </Select>
        </div>

        <TextInput
          label="Workout Name"
          name="workoutName"
          // placeholder="e.g., Bench Press"
          value={form.workoutName}
          handelChange={handleChange}
        />

        <TextInput
          label="Sets"
          name="sets"
          type="number"
          // placeholder="e.g., 3"
          value={form.sets}
          handelChange={handleChange}
        />
        <TextInput
          label="Reps"
          name="reps"
          type="number"
          // placeholder="e.g., 12"
          value={form.reps}
          handelChange={handleChange}
        />
        <TextInput
          label="Weight (kg)"
          name="weight"
          type="number"
          // placeholder="e.g., 50"
          value={form.weight}
          handelChange={handleChange}
        />
        <TextInput
          label="Duration (minutes)"
          name="duration"
          type="number"
          // placeholder="e.g., 45"
          value={form.duration}
          handelChange={handleChange}
        />
      </InputGroup>

      <FullWidthInput>
        <Button
          text="Add Workout"
          small
          onClick={handleSubmit}
          isLoading={isDisabled}
          isDisabled={isDisabled}
        />
      </FullWidthInput>
    </Card>
  );
};

export default AddWorkout;
