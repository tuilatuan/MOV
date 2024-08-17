"use client";

import { useApi } from "@/hooks/useApi";
import { getPartner } from "@/services/partnerServices";
import { Partner } from "@/types/definitions";
import React from "react";

const Partners = () => {
  const { data, loading, error } = useApi<Partner[]>(getPartner);

  const partners = data?.data?.partners || [];

  return (
    <div className="container flex flex-col items-center justify-center gap-5 902:flex-row 902:justify-between">
      <h3 className="heading text-h3bl">Đối tác của MOV</h3>
      <div className="flex flex-wrap justify-center gap-5 902:flex-nowrap 902:gap-[70px]">
        {partners?.length > 0 &&
          partners.map((item, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img src={item.image} alt={item.slug} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Partners;
