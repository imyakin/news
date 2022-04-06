import React from "react";
import { fetchNews } from "../../services/fetchNews";
import { useAppDispatch } from "../../store/hooks/hooks";
interface ButtonProps{
    text: string;
    url: string
}

const Button: React.FC<ButtonProps> = ({text, url}) => {
    const dispatch = useAppDispatch();
    const download = (url: string) => {
      dispatch(fetchNews(url))
    }


    return (
        <button 
            className="waves-effect waves-light btn-small brown darken-3 z-depth-4 hoverable"
            style={{marginBottom: "3rem", marginRight: '1rem', width: '10%', fontSize: '10px'}}
            onClick={()=>download(url)}
            >
            <i className="small material-icons left">cast</i>
            {text}
        </button>
    )
}

export default Button;