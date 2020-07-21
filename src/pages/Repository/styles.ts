import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: flex-end;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover{
            color: #666;
        }

        svg{
            margin-right: 4px;
            height: 20px;
            width: 20px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items:center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left: 80px;
            }

            strong{
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }

`;

export const Issues = styled.div`
    margin-top: 80px;

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
