// ประกาศชนิดข้อมูลภายในไฟล์ และสามารถนำไปใช้ได้เลยไม่ต้อง ex/import (แค่ในโปรเจก)
// ประกาศประเภทข้อมูลให้อยู่ใน สโคป global declaration ไม่สามารถใส่ logig ได้
// เช่น function ,console.log ,if
interface User {
    id: number
    name: string
    email: string
}

// const user:User = {
   // id: 1
   // name: 'aaa'
   // email: 'a@example.com'
// }