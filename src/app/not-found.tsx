// pages/404.js
'use client' 
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a className="back-home-btn">Go Back to Home</a>
      </Link>

      <style jsx>{`
        .not-found-page {
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          color: #666;
          margin-bottom: 30px;
        }
        .back-home-btn {
          display: inline-block;
          padding: 10px 20px;
          background-color: #0070f3;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
        .back-home-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
