import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import "./Quiz.css";
import { useContext, useEffect, useState } from "react";
import Timer from "../../components/Timer/Timer";
import Loading from "../../components/Loading/Loading";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

const Quiz = () => {
   const isFormSubmitted = useLoaderData();

   const { user, loading } = useContext(AuthContext);
   const [questions, setQuestions] = useState([]);
   const [showControl, setShowControl] = useState(false);
   const [closeControl, setCloseControl] = useState(false);
   const [handleOneSubmission, setHandleOneSubmission] = useState(false);
   const navigate = useNavigate();
   const navigation = useNavigation();
   useEffect(() => {
      fetch("https://bafskitcserver.up.railway.app/questions")
         .then((res) => res.json())
         .then((data) => setQuestions(data));
   }, []);
   if ((navigation.state === "loading", loading)) {
      return <Loading></Loading>;
   }
   if (isFormSubmitted.length > 0) {
      const found = isFormSubmitted.find((email) => email.details.email === user.email);
      console.log(found);
      if (found) {
         console.log("found");
      } else {
         setHandleOneSubmission(true);
      }
   } else {
      console.log("answer-sheet empty");
   }

   const allInputName = [];
   const handleSubmit = (e) => {
      e?.preventDefault();
      const allAns = [];
      const form = document.getElementById("formEvent");
      allInputName.map((name) => allAns.push({ Ques_No: name, Ans: form[name].value }));
      const readyToFetch = { details: { email: user.email, name: user.displayName }, answers: [...allAns] };
      fetch("https://bafskitcserver.up.railway.app/answer", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(readyToFetch),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            navigate("/");
         })
         .catch((err) => console.log(err));
      console.log(readyToFetch);
      form?.reset();
   };

   if (!showControl && !closeControl) {
      if (questions.length < 1) {
         <Loading></Loading>;
      } else {
         return (
            <>
               <p className="font-semibold text-2xl sm:text-3xl text-center">Quiz will be start after</p>
               <Timer timerState={setShowControl} endTime={"01 November 2023 09:00 PM"} classes={"mt-4 text-4xl"}></Timer>
            </>
         );
      }
   } else if (showControl && !closeControl) {
      if (questions.length < 1) {
         <Loading></Loading>;
      } else {
         return (
            <Container maxWidth="fixed">
               <Timer timerState={setCloseControl} endTime={"01 November 2023 09:20 PM"} classes={"mb-4 text-lg text-right"}></Timer>
               <Box sx={{ flexGrow: 1 }}>
                  <form onSubmit={handleOneSubmission || !(isFormSubmitted.length > 0) ? handleSubmit : undefined} id="formEvent">
                     <Grid className="allQuiz" container rowSpacing={{ xs: 5, sm: 3 }} columnSpacing={{ xs: 0, sm: 3 }}>
                        {questions.map((ques) => (
                           <Grid key={ques.id} xs={12} md={6}>
                              <Item elevation={6}>
                                 <div className="w-full text-left p-2">
                                    <h2 className="text-xl sm:text-2xl border-b border-slate-500 pb-1 nH2">{ques.question || "demo"}</h2>
                                    <div>
                                       {/* aminul */}
                                       <Grid onChange={() => (allInputName.includes(ques.id) ? null : allInputName.push(ques.id))} container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "16px" }}>
                                          <Grid item="true" xs={12} sm={6}>
                                             <Item elevation={4} sx={{ padding: 0 }}>
                                                <input type="radio" name={ques.id} id={Object.keys(ques)[2] + `${ques.id}`} value={ques.opt1 || "skipped"} />
                                                <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[2] + `${ques.id}`}>
                                                   {ques.opt1 || "Option 1"}
                                                </label>
                                             </Item>
                                          </Grid>
                                          <Grid item="true" xs={12} sm={6}>
                                             <Item elevation={4} sx={{ padding: 0 }}>
                                                <input type="radio" name={ques.id} id={Object.keys(ques)[3] + `${ques.id}`} value={ques.opt2 || "skipped"} />
                                                <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[3] + `${ques.id}`}>
                                                   {ques.opt2 || "Option 2"}
                                                </label>
                                             </Item>
                                          </Grid>
                                          <Grid item="true" xs={12} sm={6}>
                                             <Item elevation={4} sx={{ padding: 0 }}>
                                                <input type="radio" name={ques.id} id={Object.keys(ques)[4] + `${ques.id}`} value={ques.opt3 || "skipped"} />
                                                <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[4] + `${ques.id}`}>
                                                   {ques.opt3 || "Option 3"}
                                                </label>
                                             </Item>
                                          </Grid>
                                          <Grid item="true" xs={12} sm={6}>
                                             <Item elevation={4} sx={{ padding: 0 }}>
                                                <input type="radio" name={ques.id} id={Object.keys(ques)[5] + `${ques.id}`} value={ques.opt4 || "skipped"} />
                                                <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[5] + `${ques.id}`}>
                                                   {ques.opt4 || "Option 4"}
                                                </label>
                                             </Item>
                                          </Grid>
                                       </Grid>
                                    </div>
                                 </div>
                              </Item>
                           </Grid>
                        ))}
                        {questions.length > 0 && (
                           <div className="quizSubmit">
                              <input type="submit" value="Submit" />
                           </div>
                        )}
                     </Grid>
                  </form>
               </Box>
            </Container>
         );
      }
   } else if (showControl && closeControl) {
      return <p className="text-2xl sm:text-3xl font-medium text-center text-green-600 font-serif">{`Time's UP`}</p>;
   } else {
      return <p className="text-2xl text-red-500">Something went Wrong!</p>;
   }
};

export default Quiz;
