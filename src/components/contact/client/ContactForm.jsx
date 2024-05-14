import React from 'react';

export const ContactForm = () => {
  return (
    <form className="my-7 lg:w-3/6">
      <fieldset>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="border border-black p-2 lg:w-3/6"
          />

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Email"
            className="border border-black p-2 lg:w-3/6"
          />
        </div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Your Title"
          className="border border-black p-2 w-full"
        />

        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          placeholder="Your Comment"
          className="border border-black p-2 w-full"
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white uppercase foont-medium text-xs py-3 px-6 hover:bg-amber-400 transition-colors p-2"
          title="SEND"
        >
          send
        </button>
      </fieldset>
    </form>
  );
};