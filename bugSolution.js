```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/count').then(res => res.json()).then(data => setCount(data.count));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>Client Component: Count - {count}</div>
  );
}
```
```javascript
// pages/api/count.js
let count = 0;
export default function handler(req, res) {
  count++;
  res.status(200).json({ count });
}
```