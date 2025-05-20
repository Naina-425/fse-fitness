import { Delete, FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;
const Flex = styled.div`
  display: flex;
  gap: 16px;
`;
const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
`;




const WorkoutCard = ({ workout }) => {
  
  const token = localStorage.getItem("fittrack-app-token");
    console.log(workout._id)
  const deleteworkout = async()=>{
    try{
    const response = await axios.post('http://localhost:8080/api/user/deleteworkout',
    {
        id:workout._id
    },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  console.log(response)
  }
    catch(err){
      console.log(err)
    }

    navigate(0);
    
   
  }

  const navigate = useNavigate();

  return (
    <Card>
      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
<Category>#{workout?.category}</Category>
<Button onClick={
        ()=>{
          deleteworkout()
        }
      }
      sx={{
        
      }}
      >
        <Delete color="red"/>
      </Button>
      </div>
      
      <Name>{workout?.workoutName}</Name>
     
      <Sets>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </Details>
      </Flex>
    </Card>
  );
};

export default WorkoutCard;
