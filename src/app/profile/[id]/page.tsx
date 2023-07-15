export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>User Details</h1>
      <h1>{params.id}</h1>
    </div>
  )
}
