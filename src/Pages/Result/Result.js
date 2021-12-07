import React, {useEffect} from 'react'
import {useNavigate} from "react-router"
import { Button } from '@material-ui/core'
import "./Result.css";

const Result = ({name, score}) => {

      const history = useNavigate();

      useEffect(() => {
          if(!name){
                history.pushState("/")
          }
      }, [name, history])

      return (
            <div className="result">
                 <span className="title"> Final Score : {score}</span>
                 <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{alignSelf: "center", marginTop: 20}}
                  href="/"
                 >
                  Go To Homepage
                 </Button>
            </div>
      )
}

export default Result
