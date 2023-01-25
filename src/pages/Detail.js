import React from 'react'

const Detail = () => {

  const {id} =useParams();
  return (
    <div>
      <h1>{id}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus similique nemo quibusdam expedita cumque natus molestiae earum corporis voluptatum tempora quos, eos inventore corrupti quia a quasi blanditiis fuga dolorem officia qui dicta, nostrum culpa? Libero, quisquam illo! Possimus odio asperiores maxime modi cum nam, blanditiis mollitia? Sequi excepturi vero quidem asperiores dignissimos quas reiciendis architecto fugit voluptatum ut modi consequuntur iure, et delectus, enim nulla est voluptatem nobis non ea incidunt praesentium. Facere sit voluptatem esse accusantium cumque quo minima nulla voluptatum fugiat, autem ea tenetur corporis quibusdam dolorem aliquam consequuntur animi laudantium blanditiis amet, laborum doloremque perferendis!</p>
    </div>
  )
}

export default Detail
