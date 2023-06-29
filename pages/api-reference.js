import React from "react";
import Link from "next/link";

const ApiReferencePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          API Reference
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">GET /plants</h2>
            <p className="text-gray-600 mb-4">
              Retrieve a list of plants with their information.
            </p>
            <h3 className="text-lg font-semibold mb-2">Request</h3>
            <pre className="bg-gray-200 p-4 rounded-lg">
              <code className="language-http">
                GET /api/v1/plants HTTP/1.1
                <br />
                Host: your-api-host
                <br />
                Accept: application/json
              </code>
            </pre>
            <h3 className="text-lg font-semibold mb-2">Response</h3>
            <pre className="bg-gray-200 p-4 rounded-lg">
              <code className="language-json">
                [
                <br />
                &nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;: 1,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;: &quot;Plant 1&quot;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&quot;description&quot;:
                &quot;Description of Plant 1&quot;
                <br />
                &nbsp;&nbsp;{"}"},
                <br />
                &nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;: 2,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;: &quot;Plant 2&quot;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&quot;description&quot;:
                &quot;Description of Plant 2&quot;
                <br />
                &nbsp;&nbsp;{"}"},
                <br />
                &nbsp;&nbsp;...
                <br />]
              </code>
            </pre>
          </div>

          {/* Add more API endpoints here */}
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApiReferencePage;
