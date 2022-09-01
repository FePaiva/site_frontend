import React from "react";
import SendMessages from "./sendMessage";
import { SocialIcon } from "react-social-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="table-responsive"
      // style={{ backgroundColor: "#333", color: "#fff" }}
    >
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Endereco</th>
            <th>Contato</th>
            <th>Redes Sociais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rua Sete De Setembro, 904</td>
            <td>(43) 999911-1746</td>
            <td>
              <SocialIcon
                className="icon"
                url="https://instagram.com/aco_ivaipora/"
                style={{ height: 25, width: 25 }}
              />
            </td>
          </tr>
          <tr>
            <td>Centro - CEP 86870-000</td>
            <td>(43) 999911-1746</td>
            <td>
              <SendMessages className="icon" />
            </td>
          </tr>
          <tr>
            <td>Ivaipora, PR - Brasil</td>
            <td>
              <a href="mailto:acoivaipora@hotmail.com">
                acoivaipora@hotmail.com
              </a>
            </td>
            <td className="align-top"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
