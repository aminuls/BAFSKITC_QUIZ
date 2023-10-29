import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import "./Quiz.css";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

const allInputName = [];
const handleSubmit = (e) => {
   e.preventDefault();
   const allAns = [];
   const form = e.target;
   allInputName.map((name) => allAns.push({ Ques_No: name, Ans: form[name].value }));
   fetch("http://localhost:5000/answer", {
      method: "POST",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(allAns),
   })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
   console.log(allAns);
   form.reset();
};
const Quiz = () => {
   const [questions, setQuestions] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/questions")
         .then((res) => res.json())
         .then((data) => setQuestions(data));
   }, []);
   return (
      <Container maxWidth="fixed">
         <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={handleSubmit}>
               <Grid className="allQuiz" container rowSpacing={{ xs: 5, sm: 3 }} columnSpacing={{ xs: 0, sm: 3 }}>
                  {questions.map((ques) => (
                     <>
                        <Grid key={ques.id} xs={12} md={6}>
                           <Item elevation={6}>
                              <div className="w-full text-left p-2">
                                 <h2 className="text-xl sm:text-2xl border-b border-slate-500 pb-1 nH2">{ques.question || "demo"}</h2>
                                 <div>
                                    <Grid onChange={() => (allInputName.includes(ques.id) ? null : allInputName.push(ques.id))} container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "16px" }}>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[2] + `${ques.id}`} value={ques.opt1 || "skipped"} />
                                             <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[2] + `${ques.id}`}>
                                                {ques.opt1 || "Option 1"}
                                             </label>
                                          </Item>
                                       </Grid>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[3] + `${ques.id}`} value={ques.opt2 || "skipped"} />
                                             <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[3] + `${ques.id}`}>
                                                {ques.opt2 || "Option 2"}
                                             </label>
                                          </Item>
                                       </Grid>
                                       <Grid item xs={12} sm={6}>
                                          <Item elevation={4} sx={{ padding: 0 }}>
                                             <input type="radio" name={ques.id} id={Object.keys(ques)[4] + `${ques.id}`} value={ques.opt3 || "skipped"} />
                                             <label className="text-lg quizOpt" htmlFor={Object.keys(ques)[4] + `${ques.id}`}>
                                                {ques.opt3 || "Option 3"}
                                             </label>
                                          </Item>
                                       </Grid>
                                       <Grid item xs={12} sm={6}>
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
                     </>
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
};

export default Quiz;
