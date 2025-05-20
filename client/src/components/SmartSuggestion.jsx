// import React, { useState } from "react";
// import styled from "styled-components";
// import gymImg from "../utils/Images/AuthImage.jpg"; 

// const Container = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: row;
// `;

// const LeftImage = styled.div`
//   width: 50%;
//   background-image: url(${gymImg});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const RightContent = styled.div`
//   width: 50%;
//   background: linear-gradient(to bottom right, #f0faff, #ffffff);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 40px;
//   overflow-y: auto;
//   height: 100vh;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const FormWrapper = styled.div`
//   width: 100%;
//   max-width: 500px;
//   background: white;
//   padding: 32px;
//   border-radius: 20px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-size: 26px;
//   text-align: center;
//   color: #333;
//   font-weight: bold;
//   margin-bottom: 24px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   font-weight: 500;
//   color: #333;
//   display: block;
//   margin-bottom: 6px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin-bottom: 18px;
//   font-size: 14px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin-bottom: 18px;
//   font-size: 14px;
// `;

// const Button = styled.button`
//   width: 100%;
//   background-color: #007bff;
//   color: white;
//   font-weight: 600;
//   border: none;
//   padding: 12px;
//   border-radius: 8px;
//   margin-top: 8px;
//   cursor: pointer;
//   transition: background 0.3s ease;
//   &:hover {
//     background-color: #0056d2;
//   }
// `;

// const TryAgain = styled.button`
//   margin-top: 20px;
//   background: #e2e8f0;
//   color: #333;
//   font-weight: 500;
//   border: none;
//   padding: 10px 14px;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.3s;
//   &:hover {
//     background: #cbd5e0;
//   }
// `;

// const SuggestionBox = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   background: #f0f7ff;
//   border: 1px solid #c6e2ff;
//   border-radius: 12px;
//   max-height: 60vh;
//   overflow-y: auto;
//   word-wrap: break-word;
//   font-size: 14px;
//   line-height: 1.5;
//   color: #333;
// `;

// const SmartSuggestion = () => {
//   const [goal, setGoal] = useState("Muscle Gain");
//   const [level, setLevel] = useState("Beginner");
//   const [time, setTime] = useState(30);
//   const [suggestions, setSuggestions] = useState([]);
//   const [error, setError] = useState("");
//   const [showResult, setShowResult] = useState(false);

//   const handleSuggest = async () => {
//     setError("");
//     setSuggestions([]);
//     setShowResult(false);

//     try {
//       const response = await fetch("http://localhost:8080/api/exercise-suggest", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ goal, time, level }),
//       });

//       const data = await response.json();

//       if (data.success && data.suggested.length > 0) {
//         setSuggestions(data.suggested);
//         setShowResult(true);
//       } else {
//         setError("No suggestions found.");
//       }
//     } catch (err) {
//       setError("Failed to fetch suggestions. Please check the server.");
//     }
//   };

//   const handleTryAgain = () => {
//     setShowResult(false);
//     setSuggestions([]);
//     setError("");
//   };

//   return (
//     <Container>
//       <LeftImage />
//       <RightContent>
//         <FormWrapper>
//           <Title>Smart Workout Suggestion 🧠</Title>

//           {!showResult ? (
//             <>
//               <Label>Goal</Label>
//               <Select value={goal} onChange={(e) => setGoal(e.target.value)}>
//                 <option>Muscle Gain</option>
//                 <option>Weight Loss</option>
//               </Select>

//               <Label>Fitness Level</Label>
//               <Select value={level} onChange={(e) => setLevel(e.target.value)}>
//                 <option>Beginner</option>
//                 <option>Intermediate</option>
//                 <option>Advanced</option>
//               </Select>

//               <Label>Time (in minutes)</Label>
//               <Input
//                 type="number"
//                 value={time}
//                 onChange={(e) => setTime(Number(e.target.value))}
//                 min="1"
//               />

//               <Button onClick={handleSuggest}>Get Suggestion</Button>

//               {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
//             </>
//           ) : (
//             <>
//               <SuggestionBox>
//                 <h3 style={{ marginBottom: "10px", fontWeight: "600", color: "#004080" }}>
//                   Suggested Workouts
//                 </h3>
//                 <ul style={{ paddingLeft: "18px", listStyleType: "disc" }}>
//                   {suggestions.map((s, i) => (
//                     <li key={i} style={{ marginBottom: "16px" }}>
//                       <strong>{s.name}</strong> ({s.difficulty})<br />
//                       <span>{s.instructions}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </SuggestionBox>
//               <TryAgain onClick={handleTryAgain}>🔁 Try Again</TryAgain>
//             </>
//           )}
//         </FormWrapper>
//       </RightContent>
//     </Container>
//   );
// };

// export default SmartSuggestion;



import React, { useState } from "react";
import styled from "styled-components";
import gymImg from "../utils/Images/AuthImage.jpg";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
`;

const LeftImage = styled.div`
  width: 50%;
  background-image: url(${gymImg});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightContent = styled.div`
  width: 50%;
  background: linear-gradient(to bottom right, #f0faff, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow-y: auto;
  height: 100vh;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 26px;
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: block;
  margin-bottom: 6px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 18px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 18px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  font-weight: 600;
  border: none;
  padding: 12px;
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #0056d2;
  }
`;

const TryAgain = styled.button`
  margin-top: 20px;
  background: #e2e8f0;
  color: #333;
  font-weight: 500;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #cbd5e0;
  }
`;

const SuggestionBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f0f7ff;
  border: 1px solid #c6e2ff;
  border-radius: 12px;
  max-height: 60vh;
  overflow-y: auto;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

const SmartSuggestion = () => {
  const [showResult, setShowResult] = useState(false);

  const handleSuggest = () => {
    setShowResult(true);
  };

  const handleTryAgain = () => {
    setShowResult(false);
  };

  return (
    <Container>
      <LeftImage />
      <RightContent>
        <FormWrapper>
          <Title>Smart Workout Suggestion 🧠</Title>

          {!showResult ? (
            <>
              <Label>Goal</Label>
              <Select>
                <option>Muscle Gain</option>
                <option>Weight Loss</option>
              </Select>

              <Label>Fitness Level</Label>
              <Select>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Select>

              <Label>Time (in minutes)</Label>
              <Input type="number" value="30" readOnly />

              <Button onClick={handleSuggest}>Get Suggestion</Button>
            </>
          ) : (
            <>
              <SuggestionBox>
                <h3 style={{ fontWeight: "600", color: "#004080", marginBottom: "10px" }}>
                  Suggested Workouts
                </h3>
                <ul>
                  <li style={{ marginBottom: "16px" }}>
                    <strong>Wide-Grip Decline Barbell Bench Press</strong> (Beginner)
                    <p>
                      Lie back on a decline bench with the feet securely locked at the front of the bench.
                      Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand),
                      lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular
                      to the torso and the floor. This will be your starting position. As you breathe in, come down slowly until you
                      feel the bar on your lower chest. After a second pause, bring the bar back to the starting position as you
                      breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted
                      position, hold for a second and then start coming down slowly again. Repeat the movement for the prescribed amount
                      of repetitions. Tip: It should take at least twice as long to go down than to come up.
                    </p>
                  </li>
                </ul>
              </SuggestionBox>
              <TryAgain onClick={handleTryAgain}>🔁 Try Again</TryAgain>
            </>
          )}
        </FormWrapper>
      </RightContent>
    </Container>
  );
};

export default SmartSuggestion;




