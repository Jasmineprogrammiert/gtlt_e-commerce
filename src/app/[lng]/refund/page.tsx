import Link from 'next/link'

export default function RefundPage() {
  return (
    <>
    <div className="px-5 md:px-44 xl:px-52 py-20 bg-gray-50">
      <h1 className="home-h2 home-h2-2 text-center">Refund Policy</h1>
      <h2 className=" text-2xl font-medium tracking-wide mb-5">
        Returns or Exchanges Policy
      </h2>
      <div className="text-lg mb-14">
        <p className="mb-4">
          All return and exchange arrangements are subject to 
          <Link 
            href='/terms'
            target="_blank" 
            className="text-cyan-700"
          >
            {` `}Terms and Conditions
          </Link>
          .
        </p>
        <ol>
          <li className="mb-4">
            1. Unless otherwise specified, no return or exchange of merchandise will be accepted.
          </li>
          <li className="mb-4"> 
            2. Merchandise may be returned or exchanged within seven {`(`}14{`)`} days of receipt of the merchandise you ordered is faulty, defective or damaged {`(`}with no fault on your part{`)`}, or the merchandise are not what you ordered, provided that:
          </li>
          <li className="mb-4">
            2.1. The merchandise is unused and in the condition originally sold together with all parts and accessories which are provided with the merchandise, including manuals, certificates, labels, tags, consumables, bags, and boxes;
          </li>
          <li className="mb-4">
            2.2. The packaging of the merchandise must be in the condition in which it was delivered to you; and
          </li>
          <li className="mb-4">
            2.3. a request for return or exchange is sent to our customer service representative, and the merchandise is returned to us; and
          </li>
          <li>
            2.4. You agree and accept that merchandise is acceptable for exchange subject to stocks availability.
          </li>
        </ol>
      </div>

      <h2 className=" text-2xl font-medium tracking-wide mb-5">
        Returns or Exchanges Arrangement
      </h2>
      <div className="text-lg mb-10">
        <ol>
          <li className="mb-4">
            3. If you find the above situation and needs to return or replace the merchandise, you can contact our customer service department in the following ways:
          </li>
          <li className="mb-4"> 
            3.1. <br />WhatsApp: 
            <Link 
              href={`https://wa.me/85269007758`} 
              target="_blank" 
              className="text-cyan-700"
            >
              {` `}+852 6900 7758
            </Link> <br />Email:
            <Link 
              href="mailto:info@gutolution.com"
              className="text-cyan-700"
            >
              {` `}info@gutolution.com
            </Link> <br />
            Office Hours: Monday to Friday 9am - 1pm, 2pm - 6pm. Closed on weekend and public holidays. 
          </li>
          <li className="mb-4">
            3.2. Our Customer Service Officer will advise you the further information on return or exchange arrangement.
          </li>
          <li className="mb-4">
            4. In normal circumstances, we do not accept refund requests. Under special circumstances {`(`}such as, but not limited to, we cannot arrange exchange for the defective merchandise owing to lack of stock{`)`}, we will proceed refund within 30 days after our confirmation. Our Customer Service Office will advise you of the details.
          </li>
          <li className="mb-4">
            5. We reserve the right to terminate or vary the above policy and arrangement from time to time without providing any prior notification. In the event of any dispute, our decision shall be final and conclusive.
          </li>
        </ol>
      </div>
    </div>
    </>
  )
}