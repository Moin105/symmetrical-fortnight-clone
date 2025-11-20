import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// API endpoints
export const endpoints = {
  bars: '/bars',
  distilleries: '/distilleries',
  events: '/events',
  blogs: '/blogs',
  homepage: '/homepage',
  orders: '/orders',
}

// API functions
export const apiService = {
  // Bars
  getBars: (params?: any) => api.get(endpoints.bars, { params }),
  getBar: (id: number) => api.get(`${endpoints.bars}/${id}`),
  
  // Distilleries
  getDistilleries: (params?: any) => api.get(endpoints.distilleries, { params }),
  getDistillery: (id: number) => api.get(`${endpoints.distilleries}/${id}`),
  
  // Events
  getEvents: (params?: any) => api.get(endpoints.events, { params }),
  getEvent: (id: number) => api.get(`${endpoints.events}/${id}`),
  
  // Blogs
  getBlogs: (params?: any) => api.get(endpoints.blogs, { params }),
  getBlog: (id: number) => api.get(`${endpoints.blogs}/${id}`),
  
  // Homepage
  getHomepageContent: () => api.get(endpoints.homepage),
  
  // Orders
  createOrder: (orderData: any) => api.post(endpoints.orders, orderData),
  getMyOrders: () => api.get(`${endpoints.orders}/my-orders`),
  getOrder: (id: number) => api.get(`${endpoints.orders}/${id}`),
}

export default api
