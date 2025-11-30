import React from 'react'

export default function ServiceCard({title,desc,icon}){
  return (
    <article className="service-card" aria-labelledby={title.replaceAll(' ','-')}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
        <div aria-hidden="true" style={{width:44,height:44,display:'grid',placeItems:'center',borderRadius:10,background:'linear-gradient(180deg,var(--blue-100),white)'}}>
          {icon || '🧠'}
        </div>
        <h3 id={title.replaceAll(' ','-')} style={{margin:0}}>{title}</h3>
      </div>
      <p>{desc}</p>
    </article>
  )
}
