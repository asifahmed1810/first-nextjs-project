import { withAuthRequired } from "@kinde-oss/kinde-auth-nextjs";

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
    </div>
  );
}

export default withAuthRequired(Profile);
