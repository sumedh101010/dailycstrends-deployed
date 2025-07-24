import { TrendItem } from '../types';

export const mockTrends: TrendItem[] = [
  {
    id: '1',
    title: 'Sliding Window Technique with Two Pointers',
    description: 'Master the sliding window pattern for array problems with optimal O(n) time complexity.',
    category: 'dsa',
    difficulty: 'intermediate',
    codeExample: `// Find maximum sum of k consecutive elements
function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}`,
    date: '2025-01-11'
  },
  {
    id: '2',
    title: 'GPT-5 Architecture Breakthrough',
    description: 'OpenAI announces revolutionary multimodal architecture with 100x efficiency improvements.',
    category: 'ai-ml',
    difficulty: 'advanced',
    link: 'https://openai.com/research/gpt5',
    date: '2025-01-11'
  },
  {
    id: '3',
    title: 'Quantum-Resistant Cryptography Standards',
    description: 'NIST finalizes post-quantum cryptographic algorithms for enterprise adoption.',
    category: 'cybersecurity',
    difficulty: 'advanced',
    date: '2025-01-11'
  },
  {
    id: '4',
    title: 'Binary Search Variations You Must Know',
    description: 'Advanced binary search patterns including search in rotated arrays and finding boundaries.',
    category: 'dsa',
    difficulty: 'intermediate',
    codeExample: `// Search in rotated sorted array
function searchInRotated(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    
    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } 
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}`,
    date: '2025-01-11'
  },
  {
    id: '5',
    title: 'WebAssembly System Interface (WASI) 2.0',
    description: 'Major update brings native system integration capabilities to WebAssembly applications.',
    category: 'web-dev',
    difficulty: 'intermediate',
    date: '2025-01-11'
  },
  {
    id: '6',
    title: 'Dynamic Programming Optimization Tricks',
    description: 'Space optimization techniques for DP problems including rolling arrays and state compression.',
    category: 'dsa',
    difficulty: 'advanced',
    codeExample: `// Space-optimized Longest Common Subsequence
function lcsOptimized(text1, text2) {
  const m = text1.length, n = text2.length;
  
  // Use only two rows instead of full 2D matrix
  let prev = new Array(n + 1).fill(0);
  let curr = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) {
        curr[j] = 1 + prev[j-1];
      } else {
        curr[j] = Math.max(prev[j], curr[j-1]);
      }
    }
    // Swap arrays for next iteration
    [prev, curr] = [curr, prev];
  }
  
  return prev[n];
}`,
    date: '2025-01-11'
  }
];