import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoSingle({ repo }) {

   const [lastCommitDate, setLastCommitDate] = useState(null);
   const [commitMessages, setCommitMessages] = useState([]);

   // destructed repo obj
   const {
      name,
      description,
      html_url,
      forks,
      open_issues,
      watchers_count,
      stargazers_count,
      created_at,
   } = repo;

   useEffect (() => {
      fetch(repo.commits_url.replace("{/sha}", ""))
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setLastCommitDate(data[0].commit.author.date);
          setCommitMessages(data.slice(0, 5).map(commit => commit.commit.message));
        }
      })
      .catch(error => console.error(error));
   }, [repo]);

  return (
    <div className='mb-2 rounded-md card bg-base-200 hover:bg-purple-900'>
      <div className="card-body">
         <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url} >
               <FaLink className='inline mr-1'/> {name}
            </a>
         </h3>
         <p className='mb-3'>Description: <br /> 
            <strong> {description} </strong>
         </p>
         <p className='mb-3 text-s'>
            Created at: <br />
         <strong> {created_at} </strong>         
         </p>
         <p className='mb-3 text-s'>
            Last commit date: <br />
            <strong> {lastCommitDate} </strong>
         </p>
         <p className='mb-3 text-s'>
            Last 5 commit messages: 
         </p>
         <ul className='mb-5'>
            {commitMessages.map((message, i) => <li className="mb-2 text-xs text-gray-600"key={i}>{i + 1}: {message}</li>)}
         </ul>
         <div>
            <div className="mr-2 badge badge-info badge-lg">
               <FaEye className='mr-2'/> {watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
               <FaStar className='mr-2'/> {stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
               <FaInfo className='mr-2'/> {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
               <FaUtensils className='mr-2'/> {forks}
            </div>
         </div>
      </div>
    </div>
  )
}

RepoSingle.propTypes = {
   repo: PropTypes.object.isRequired,
}

export default RepoSingle
