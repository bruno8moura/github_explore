import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;

    margin-top: 80px;
    max-width: 450px;
    line-height: 56px
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        padding: 15px;
        text-decoration: none;

        & + a{
            margin-top: 10px;
        }

        display: flex;
        align-items: center;
        justify-content: space-between;

        transition: transform 0.2s;

        &:hover{
            transform: translateX(10px);
        }

        span {
            display: flex;
            flex: 1;
            align-items: center;
            img {
                width: 90px;
                height: 90px;
                border-radius: 50%;
            }

            div {
                margin-left: 23px;
                strong {
                    color: #3D3D4D;
                    font-size: 20px;
                    line-height: 28px;
                }

                p {
                    font-size: 14px;
                    line-height: 21px;
                    color: #A8A8B3;
                    margin-top: 5px;
                }
            }
        }
    }

    .arrow {
        color: #CBCBD6;
    }
`;
