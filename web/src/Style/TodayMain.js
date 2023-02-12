import { BsCheckSquareFill } from "react-icons/bs";
import styled from 'styled-components';

export const TodayBox = styled.div`
    width: 355px;
    height: auto;
    margin-top: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 5px;

    h2 {
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }
    
`
export const Track = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    p {
        font-size: 15px;
        color: #666666;
    }

    span.sequence {
        color: ${ ({habit}) => (habit.done ? "#8FC549" : "#666666")};
    }

    span.record {
        color: ${ ({habit}) => (habit.done 
                                && habit.currentSequence === habit.highestSequence 
                                && habit.highestSequence > 0) 
                                    ? "#8FC549" 
                                    : "#666666"};
    }
`
export const CheckIcon = styled(BsCheckSquareFill) `
    width: 80px;
    height: 80px;
    cursor:pointer;
    color: ${ ({habit}) => (habit.done ? "#8FC549" : "#EBEBEB")};
`
