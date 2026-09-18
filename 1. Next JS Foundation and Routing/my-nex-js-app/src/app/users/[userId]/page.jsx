

const UserDetailPage = async ({ params }) => {
    const { userId } = await params;
    // console.log(userId)

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();

    return (
<div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
  <div>
    <h2 className="text-2xl font-bold text-gray-800">
      {user.name}
    </h2>

    <div className="mt-4 space-y-2">
      <p>
        <strong className="font-semibold">Username:</strong>{" "}
        {user.username}
      </p>

      <p>
        <strong className="font-semibold">Email:</strong>{" "}
        {user.email}
      </p>

      <p>
        <strong className="font-semibold">Phone:</strong>{" "}
        {user.phone}
      </p>

      <p>
        <strong className="font-semibold">Website:</strong>{" "}
        {user.website}
      </p>
    </div>
  </div>

  {/* Address */}
  <div>
    <h3 className="text-xl font-semibold text-gray-700 mb-3">
      Address
    </h3>

    <div className="space-y-2">
      <p>
        <strong className="font-semibold">Street:</strong>{" "}
        {user.address.street}
      </p>

      <p>
        <strong className="font-semibold">Suite:</strong>{" "}
        {user.address.suite}
      </p>

      <p>
        <strong className="font-semibold">City:</strong>{" "}
        {user.address.city}
      </p>

      <p>
        <strong className="font-semibold">Zipcode:</strong>{" "}
        {user.address.zipcode}
      </p>
    </div>
  </div>

  {/* Location */}
  <div>
    <h4 className="text-lg font-semibold text-gray-700 mb-3">
      Location
    </h4>

    <div className="space-y-2">
      <p>
        <strong className="font-semibold">Latitude:</strong>{" "}
        {user.address.geo.lat}
      </p>

      <p>
        <strong className="font-semibold">Longitude:</strong>{" "}
        {user.address.geo.lng}
      </p>
    </div>
  </div>

  {/* Company */}
  <div>
    <h3 className="text-xl font-semibold text-gray-700 mb-3">
      Company
    </h3>

    <div className="space-y-2">
      <p>
        <strong className="font-semibold">Name:</strong>{" "}
        {user.company.name}
      </p>

      <p>
        <strong className="font-semibold">Catch Phrase:</strong>{" "}
        {user.company.catchPhrase}
      </p>

      <p>
        <strong className="font-semibold">Business:</strong>{" "}
        {user.company.bs}
      </p>
    </div>
  </div>
</div>
    );
};

export default UserDetailPage;