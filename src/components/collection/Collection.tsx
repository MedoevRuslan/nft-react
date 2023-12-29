import React from "react";
import styled from "styled-components";
import SellerImg from "../../assets/images/products/image-1.png";
import SellerImageRetina from "../../assets/images/products/image-1@2.png";
import { SellerInfo } from "../../pages/dashboard/SellerInfo";

export const Collection = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Collection</th>
          <th>Volume</th>
          <th>24h %</th>
          <th>Floor Price</th>
          <th>Owners</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SellerInfo
              sellerInfo={{
                name: "Alex Ca.",
                img: SellerImg,
                imgRetina: SellerImageRetina,
                description: "By Alex",
              }}
              imgWidth={"48px"}
            />
          </td>
          <td>8,456</td>
          <td>+ 27.78%</td>
          <td>3,5</td>
          <td>2,2K</td>
          <td>500</td>
        </tr>
        <tr>
          <td>
            <SellerInfo
              sellerInfo={{
                name: "Alex Ca.",
                img: SellerImg,
                imgRetina: SellerImageRetina,
                description: "By Alex",
              }}
              imgWidth={"48px"}
            />
          </td>
          <td>4,780</td>
          <td>+ 27.78%</td>
          <td>7,9</td>
          <td>3,4K</td>
          <td>900</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  max-width: 100%;
  width: 100%;
  border-collapse: collapse;

  thead th {
    text-align: left;
    color: #93989a;
    font-size: 0.75rem;
    font-weight: 500;
  }

  tbody td {
    padding: 20px 0 14px;
    border-bottom: 1px solid #ebe9e9;
    font-size: 0.875rem;
    font-weight: 500;

    &:nth-child(2),
    &:nth-child(4) {
      font-weight: 600;
    }
    &:nth-child(3) {
      color: #10c352;
    }
  }
`;
