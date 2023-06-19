import React from 'react';
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] hover:bg-gray-900`} >
            <img src={client.logo} alt="client" className="sm:w-[100px] w-[150px] h-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients