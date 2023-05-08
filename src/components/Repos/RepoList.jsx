
import PropTypes from 'prop-types'
import RepoSingle from './RepoSingle'

function RepoList({ repos }) {
  return (
   <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
         <h2 className="text-3xl my-4 font-bold card-title">
            User Repos
         </h2>
         {repos.map((repo) => (
            <RepoSingle key={repo.id} repo={repo} />
         ))}
      </div>
   </div>
  )
}

RepoList.propTypes = {
   repos: PropTypes.array.isRequired,
}

export default RepoList
