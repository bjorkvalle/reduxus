// import * as React from 'react';
// import Row from './Row';

// interface Props {
//     entities: any[];
//     onClick: (entity: any) => any;
// }

// const EntityTable: React.StatelessComponent<Props> = ({ entities, onClick }) => { //extends React.Component<Props> {
//     const rows: any[] = [];
//     const styles = {
//         header: {
//             "width": "10%"
//         }
//     };

//     entities.forEach((entity) => {
//         rows.push(<Row key={entity.id} entity={entity} onClick={onClick} />)
//     });

//     return (
//         <table className='table table-hover'>
//             <thead>
//                 <tr>
//                     <th style={styles.header}>Id</th>
//                     <th>Name</th>
//                 </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//     );
// }
// export default EntityTable;